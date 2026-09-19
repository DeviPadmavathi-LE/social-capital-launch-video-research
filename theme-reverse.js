const fs = require('fs');
const path = require('path');

const files = [
  'app/page.tsx',
  'app/cases/page.tsx',
  'app/insight/page.tsx',
  'components/Nav.tsx'
];

const replacements = {
  // Backgrounds
  'bg-\\[#11212D\\]': 'bg-white', // Cards go back to white
  'bg-\\[#06141B\\]': 'bg-white', // Elements go back to white
  'bg-\\[#253745\\]': 'bg-[#E5EBF0]', // Light pastel blue for inner panels
  'bg-\\[#4A5C6A\\]': 'bg-[#11212D]', // Buttons become dark navy
  'bg-\\[#CCD0CF\\]': 'bg-[#06141B]', // Previously black backgrounds go dark navy
  
  // Text
  'text-\\[#CCD0CF\\]': 'text-[#06141B]', // Main text becomes dark navy
  'text-\\[#06141B\\]': 'text-white', // Button text becomes white
  'text-\\[#9BA8AB\\]': 'text-[#4A5C6A]', // Muted text becomes slate
  'text-\\[#4A5C6A\\]': 'text-[#253745]', // Dim text becomes dark slate
  
  // Borders
  'border-\\[#253745\\]': 'border-[#CCD0CF]', // Borders become light silver
  'border-\\[#11212D\\]': 'border-[#CCD0CF]',
  'border-\\[#4A5C6A\\]': 'border-[#11212D]',
  'border-\\[#CCD0CF\\]': 'border-[#06141B]'
};

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const keys = Object.keys(replacements);
    
    keys.forEach(key => {
      const regex = new RegExp(key, 'g');
      content = content.replace(regex, replacements[key]);
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
