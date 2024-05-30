const myNFTs=[];
function mintNFT(title, description, creatorName, dateCreated) {
    const myNFT={
  
    "title": title,
    "description": description,
    
     "creator name": creatorName,
     "date created":  dateCreated
    }
 myNFTs.push(myNFT);
 console.log("Minted "+title);
};
 
 function listmyNFTs(){
 
 for(let i=0;i<myNFTs.length;i++){
     console.log("\ntitle: \t\t\t" + myNFTs[i].title);
     console.log("description: \t" + myNFTs[i].description);
     console.log("creator name: \t" + myNFTs[i]["creator name"]);
     console.log("date_created: \t" + myNFTs[i]["date created"]);
 }
}
  function getTotalSupply(){
      console.log("\nTotal NFTs: "+myNFTs.length);
  }

mintNFT("Everydays:The first 5000 days","A Digital Artwork","Akansha","4th February 2024");
mintNFT("CryptoPunk ", "One of the original CryptoPunks", "Larry", "23rd June 2017");
mintNFT("Bored Ape ", "A unique Bored Ape NFT", "Yuga Labs", "30th April 2021" );

listmyNFTs();
getTotalSupply();
