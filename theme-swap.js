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
  'bg-white': 'bg-[#11212D]',
  'bg-neutral-50': 'bg-[#06141B]',
  'bg-neutral-100': 'bg-[#06141B]',
  'bg-neutral-200': 'bg-[#253745]',
  'bg-neutral-300': 'bg-[#4A5C6A]',
  'bg-black': 'bg-[#CCD0CF]', // Buttons that were black are now bright
  'bg-blue-50': 'bg-[#11212D]',
  'bg-blue-100': 'bg-[#253745]',
  'bg-blue-500': 'bg-[#4A5C6A]',
  'bg-red-50': 'bg-[#11212D]',
  
  // Text
  'text-black': 'text-[#CCD0CF]',
  'text-white': 'text-[#06141B]',
  'text-neutral-400': 'text-[#4A5C6A]',
  'text-neutral-500': 'text-[#9BA8AB]',
  'text-neutral-600': 'text-[#9BA8AB]',
  'text-neutral-700': 'text-[#CCD0CF]',
  'text-neutral-800': 'text-[#CCD0CF]',
  'text-neutral-900': 'text-[#CCD0CF]',
  'text-blue-500': 'text-[#9BA8AB]',
  'text-blue-600': 'text-[#CCD0CF]',
  'text-red-500': 'text-[#9BA8AB]', 
  'text-red-400': 'text-[#4A5C6A]',
  'text-red-700': 'text-[#CCD0CF]',
  
  // Borders
  'border-neutral-100': 'border-[#11212D]',
  'border-neutral-200': 'border-[#253745]',
  'border-black': 'border-[#CCD0CF]',
  'border-blue-100': 'border-[#253745]',
  'border-blue-500': 'border-[#4A5C6A]',
  'border-red-100': 'border-[#253745]',
  'border-red-200': 'border-[#253745]'
};

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace logic
    const keys = Object.keys(replacements).sort((a, b) => b.length - a.length);
    
    keys.forEach(key => {
      // Create a regex that avoids modifying colors inside the arbitrary brackets if they somehow overlap
      const regex = new RegExp(`(?<!\\[)\\b${key}\\b`, 'g');
      content = content.replace(regex, replacements[key]);
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
