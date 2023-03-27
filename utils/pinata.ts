const PINATA_URL = process.env.PINATA_URL;

export const replacePinataUrl = (url: string): string => {
  if (!url) {
    return '';
  }
  return url
    .replace('ipfs/', PINATA_URL)
    .replace('ipfs://', PINATA_URL)
    .replace('https://dweb.link/ipfs/', PINATA_URL)
    .replace('https://gateway.ipfs.io/ipfs/', PINATA_URL)
    .replace('https://gateway.pinata.cloud/ipfs/', PINATA_URL)
    .replace(/https:\/\/ipfs.*.*\/ipfs\//g, PINATA_URL)
    .replace(/https:\/\/*.*\.mypinata\.cloud\/ipfs\//g, PINATA_URL)
    .replace(/#/g, '%23');
};
