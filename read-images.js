// Example1

fetch(
  "https://cdn.shopify.com/s/files/1/0300/3498/5096/products/20200530_113756_1024x1024@2x.png?v=1618354827"
)
  .then((response) => response.blob())
  .then((bird) => {
    document.getElementById("rainbowLorikeet").src = URL.createObjectURL(bird);
    console.log(`The Fetch for the Bird image was Successfull`);
  })
  .catch((error) =>
    console.error(`There is an error with fetching the bird image - ${error}`)
  );

// Example 2

fetchElephant()
  .then((response) =>
    console.log(`The Fetch for the Elephant image wasSuccessfull`)
  )
  .catch((error) =>
    console.error(
      `There is an error with fetching the elephant image - ${error}`
    )
  );

async function fetchElephant() {
  const response = await fetch(
    "https://static.scientificamerican.com/sciam/cache/file/065ACE5F-1E4B-4D3E-8E1E7CE0397D7681.jpg"
  );
  const elephant = await response.blob();
  document.getElementById("elephants").src = URL.createObjectURL(elephant);
}
