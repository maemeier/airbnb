window.onload = ()=>{

}

axios.get('/api/rooms').then((res)=>{
  // console.log('res' res.data);


// traget rooms

let rooms_ui = document.getElementById('allRooms')
let allRooms = res.data
// console.log(rooms);

//foreach
allRooms.forEach((p) => {
rooms_ui.insertAdjacentHTML('beforeEnd',`
<div class="allRooms">

  <div class="rooms">
  <div class="row">
    <div id="box">
      <div class="inner-top-box style="background-image: url('${p.image}')></div>
      <div class="inner-bottom-box">
        <h6> ${p.type} </h6>
        <h6> ${p.cities}, ${p.countries}</h6>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <h6> ${p.price} CHF </h6>

      </div>
    </div>
</div>
</div>
</div>`)
    }) //end of forEach function

  }).catch((err) => {
    console.log('Err', err)

  })//end of products promise catch function