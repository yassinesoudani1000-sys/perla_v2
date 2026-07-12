const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imgDir = path.join(__dirname, "public", "extracted_images");
const outDir = path.join(__dirname, "public", "images");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(imgDir).filter(f => /\.(png|jpe?g)$/i.test(f));

console.log(`Optimisation de ${files.length} images...`);

const MAX_WIDTH = 800;
const MAX_HERO_WIDTH = 1920;

async function convert(file) {
  const inputPath = path.join(imgDir, file);
  const name = path.parse(file).name;
  const isHero = file.includes("image_2") || file.includes("image_96");
  const maxW = isHero ? MAX_HERO_WIDTH : MAX_WIDTH;

  const metadata = await sharp(inputPath).metadata();
  const width = Math.min(metadata.width || maxW, maxW);

  const outputPath = path.join(outDir, `${name}.webp`);

  await sharp(inputPath)
    .resize(width, undefined, { withoutEnlargement: true, fit: "inside" })
    .webp({ quality: 80, effort: 6 })
    .toFile(outputPath);

  const oldSize = fs.statSync(inputPath).size;
  const newSize = fs.statSync(outputPath).size;
  const saved = ((oldSize - newSize) / oldSize * 100).toFixed(1);

  console.log(`${file} → ${name}.webp (${(newSize / 1024).toFixed(0)} KB, économie ${saved}%)`);
}

(async () => {
  for (const file of files) {
    await convert(file);
  }
  const totalOld = files.reduce((s, f) => s + fs.statSync(path.join(imgDir, f)).size, 0);
  const totalNew = files.reduce((s, f) => {
    const webp = path.join(outDir, path.parse(f).name + ".webp");
    return s + (fs.existsSync(webp) ? fs.statSync(webp).size : 0);
  }, 0);
  console.log(`\nTerminé ! Taille totale: ${(totalOld / 1024 / 1024).toFixed(1)} MB → ${(totalNew / 1024 / 1024).toFixed(1)} MB (économie ${((totalOld - totalNew) / totalOld * 100).toFixed(1)}%)`);
})();
