const fullname = "  Anirach  Mingkhwan  ";

const cleanedName = fullname.trim();

const nameParts = cleanedName.split(' ');

const finalParts = nameParts.filter(Boolean);

const firstName = finalParts[0];
console.log(`สวัสดี, ${firstName}!`);