window.onload = ()=>{

axios.get('/api/rooms').then((res)=>{
  let rooms_ui = document.getElementById('allRooms')
  let allRooms = res.data
  allRooms.forEach((p) => {
    console.log(p);
    rooms_ui.insertAdjacentHTML('beforeEnd',`
    <div class="rooms">
      <div class="row">
        <div id="box">
          <div class="inner-top-box" style="background-image: url(${p.image})"></div>
          <div class="inner-bottom-box">
            <h6> ${p.name} </h6>
            <h6> ${p.city}, ${p.country}</h6>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <h6> ${p.price} CHF per Night</h6>

          </div>
        </div>
      </div>
    </div>`)
    })

  //end of forEach function

  }).catch((err) => {
    console.log('Err', err)
  })

  // city
  axios.get('api/cities').then((res) => {
    let showFilter = document.getElementById('bangkok')
    let rooms = res.data
    console.log('res.data', res.data);
    rooms.forEach((e) => {
      showFilter.insertAdjacentHTML('afterBegin', `
        <a href="#bangkok" id="${e.id}">${e.city}</a>
      `)
    })
  })

}
