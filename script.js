getAllBookss();
var fin;
async function getAllBookss() {
  try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books");
    let res1 = await res.json();
    fin = await res1;
    getHTML(fin);
  } catch (error) {
    console.log(error);
  }
}
async function getHTML(fin) {
  const data = document.getElementById("bookList");
  data.innerHTML = ``;
  for (let a of fin) {
    data.innerHTML += `
        <div  id="${a.name}" class="display-parent" >
            <div>
                <div class="content-card">
                    <h1>Name of the Book :<strong>${a.name}</strong> </h1>
                    <h4>ibsn: ${a.isbn}</h4> 
                    <span>Number of Pages : ${a.numberOfPages}</span>
                    <h3>Authors : ${a.authors}</h3>
                    <h4>Publisher :${a.publisher}, Released on :${a.released}</h4>
                   <h5>About the Book: ${a.publisher}</h5>
                </div>
                
            </div>
        </div>
      `;
  }
}

function submitHandler() {
  let data = document.getElementById("bookName").value;
  console.log(data, fin);
  let res = fin.filter((item) =>
    item.name.toLowerCase().match(data.toLowerCase())
  );
  if (res.length > 0) {
    this.getHTML(res);
  }
}
function filterDetect() {
  console.log("J");
  this.submitHandler();
}
