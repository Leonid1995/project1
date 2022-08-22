let data = [];
function createObj(brand,model,fuel,year,type,price){
  return {
    brand: brand,
    model: model,
    fuel: fuel,
    year: year,
    type: type,
    price: price
  }
}
function writeCar(){
    let brand = document.getElementById('brand').value;
    let model = document.getElementById('model').value;
    let fuel = document.getElementById('fuel').value;
    let year = document.getElementById('year').value;
    let type = document.getElementById('type').value;
    let price = document.getElementById('price').value;
  if(brand ===''){
    document.getElementById('errorBrand').innerHTML = 'Марка не введена'
  } 
  if(model === ''){
    document.getElementById('errorModel').innerHTML = 'Модель не введена'
  }
  if(fuel === ''){
    document.getElementById('errorFuel').innerHTML = 'Тип топлива не введен'
  }
  if(year === ''){
    document.getElementById('errorYear').innerHTML = 'Год не введен'
  }
  if(type === ''){
    document.getElementById('errorType').innerHTML = 'Тип кузова не введен'
  }
  if(price === ''){
    document.getElementById('errorPrice').innerHTML = 'Цена не введена'
  }
  if(brand!='' && model!='' && fuel!='' && year!='' && type!='' && price!=''){  
    clearErrors()
    let newCar = createObj(brand,model,fuel,year,type,price)
    data.push(newCar)
    //let carReview = "Краткий обзор"+ model +" "+ brand +" "+ fuel
    appendValues(brand,model,fuel,year,type,price)
  }
}
function appendValues(brand,model,fuel,year,type,price){
  let tableRow = document.createElement("tr")
  let brandCell = document.createElement("td")
  let modelCell = document.createElement("td")
  let fuelCell = document.createElement("td")
  let yearCell = document.createElement("td")
  let typeCell = document.createElement("td")
  let priceCell = document.createElement("td")
  let actionCell = document.createElement("td")
  let actionButton = document.createElement("button")
  let brandTextnode = document.createTextNode(brand)
  let modelTextnode = document.createTextNode(model)
  let fuelTextnode = document.createTextNode(fuel)
  let yearTextnode = document.createTextNode(year)
  let typeTextnode = document.createTextNode(type)
  let priceTextnode = document.createTextNode(price)
  let actionTextnode = document.createTextNode('Delete')
  brandCell.appendChild(brandTextnode)
  tableRow.appendChild(brandCell)
  modelCell.appendChild(modelTextnode)
  tableRow.appendChild(modelCell)
  fuelCell.appendChild(fuelTextnode)
  tableRow.appendChild(fuelCell)
  yearCell.appendChild(yearTextnode)
  tableRow.appendChild(yearCell)
  typeCell.appendChild(typeTextnode)
  tableRow.appendChild(typeCell)
  priceCell.appendChild(priceTextnode)
  tableRow.appendChild(priceCell)
   actionButton.onclick = function () {
    myDelete(this);
  };
  actionButton.appendChild(actionTextnode)
  actionCell.appendChild(actionButton)
  tableRow.appendChild(actionCell)
  document.getElementById('table').appendChild(tableRow)
}
function myDelete(r) {
  let i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}
function clearText(){
  document.getElementById('brand').value=""
  document.getElementById('model').value=""
  document.getElementById('fuel').value=""
  document.getElementById('year').value=""
  document.getElementById('type').value=""
  document.getElementById('price').value=""
}
function clearErrors(){
    document.getElementById('errorBrand').innerHTML = ''
    document.getElementById('errorModel').innerHTML = ''
    document.getElementById('errorFuel').innerHTML = ''
    document.getElementById('errorYear').innerHTML = ''
    document.getElementById('errorType').innerHTML = ''
    document.getElementById('errorPrice').innerHTML = ''
}