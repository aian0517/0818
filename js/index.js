var head_swp = new Swiper(".head-swp", {
  loop:true,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: false,
    slideShadows: false,
    // shadowOffset: 20,
    // shadowScale: 0.94,
  },
  autoplay: {
    delay: 4800,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
})

var body3_swp = new Swiper(".body3-swp",{
    loop:true,
    effect:"coverflow",
    grabCursor:true,
    centeredSlides:true,
    coverflowEffect:{
      rotate:0,
      stretch:100,
      depth:210,
      modifier:1,
      slidesShadows:false,
    },
    slidesPerView:3,
    autoplay:{
      delay:2500,
      disableOnInteraction:false,
    },
    speed:1000,
    pagination:{
      el:".body3-pagination",
      // clickable:true,
    },
    breakpoints:{
      0:{
        slidesPerView:1,
        coverflowEffect:{
          depth:10,
          modifier:0,
        },
      },
      1080:{
        slidesPerView:3,
      }
    }
})




// nav
// var y = $(window).scrollTop()
// $(window).scroll(()=>{
//   var win_y = $(window).scrollTop()
//   if($(window).innerWidth() < 1080){
//     if(win_y > y){
//       $('nav').css('top','-100px')
//     }else{
//       $('nav').css('top','0')
//     }
//   }
//   y = win_y
// })

// 如何避免
$('.aa').click(function(){
  const index = $(this).index('.aa')
  $('.aa').removeClass('active')
  $(this).addClass('active')
  $('.body2-card-img').attr('src', body2_content[index].img);
  $('.body2-card-title').text(body2_content[index].title);
  $('.body2-card-text').text(body2_content[index].text);
  // $('.body2-card').animate({transform:'scale(1)'},1000)
});


// chart

// const ctx = $('#mychart')
// const abcd = new Chart (ctx,{
//   type:'bar',
//   data:{
//     labels:['重要商用電話','推銷電話','詐騙電話'],
//     datasets:[{
//       backgroundColor:[
//         '#2894FF',
//         '#f78614',
//         '#f56255'
//       ],
//       borderColor: [
//         'rgba(255,99,132,1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)'
//       ],
//       borderWidth:2,
//       label:'國民APP whoscall2021年度報告',
//       data:[83.5,40.4,4.4],
//     }]
//   }
// })

Highcharts.chart('mychart',{
    chart:{
      type:'pie',
      options3d:{
        enabled:true,
        alpha:45,
      },
      backgroundColor:'var(--bg--sun)',
    },
    title:{
      text:null,
    },
    plotOptions:{
      pie:{
        innerSize:100,
        depth:45,
        dataLabels:{
          style:{
            fontSize:'20px',
          }
        }
      }
    },
    series:[{
      name:'電話通話比例',
      data:[
        ['重要商用電話',83.5],
        ['推銷電話',40.4],
        ['詐騙電話',4.4],
      ],
    }],
    credits:{
      enabled:false,
    },
    tooltip:{
      style:{
        fontSize:'25px',
        fontFamily:'ccc',
      },
    },
    responsive:{
      rules:[
      {
        condition:{maxWidth:500},
        chartOptions:{
          plotOptions:{
            pie:{
              innerSize:70,
              dataLabels:{
                style:{
                  fontSize:'15px',
                }
              }
            }
          }
        }
      },
      {
        condition:{
          minWidth:600,
        },
        chartOptions:{
          plotOptions:{
            pie:{
              dataLabels:{
                style:{
                  fontSize:'20px',
                }
              }
            }
          }
        }
      },
    ]
    },
})


sun
var sun = 1
$('.sun').click(()=>{
   if(sun === 1){
    $('body').css('--bg--color','#ec953d')
    $('body').css('--bg--color2','#599fe6')
    $('body').css('--bg--sun','#5d5d5d')
    $('body').css('--color--sun','#fff')
    $('.sun').attr('src','./image/nav-icon3-moon.png')
    sun = 0
  }else if(sun === 0){
    $('body').css('--bg--color','#599fe6')
    $('body').css('--bg--color2','#ec953d')
    $('body').css('--bg--sun','#fff')
    $('body').css('--color--sun','#000')
    $('.sun').attr('src','./image/nav-icon3.png')
    sun = 1
  }
})


$('.color-btn').click(()=>{
  var form_color = $('.form-color').val()
  var form_color2 =$('.form-color2').val()
  $('body').css('--bg--color',form_color)
  $('body').css('--bg--color2',form_color2)
})

// shop

var shop_swiper = new Swiper('.shop-swiper',{
  slidesPerView:3,
  spaceBetween:10,
  garbCursor:true,
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    1080:{
      slidesPerView:3,
    }
  },
  pagination:{
    el:'.shop-pagination',
  },
})
$.each(shop_data,function(index,value){
  $('.shop-wrapper').append(`
    <div class="swiper-slide">
      <div class="card p-2">
        <img src="${value.img}" alt="" class="card-img-top shop-img">
        <div class="card-body df justify-content-around flex-column">
            <div class="card-title shop-title">
              ${value.title}
            </div>
            <div class="card-text shop-text">
                <p class="mb-2">${value.text}</p>
                <p class="color2 text-center fw-bold fs-5" >NT$${value.price_text}/一天</p>
            </div>
            <div class="shop-control">
                <button class="shop-btn-reduce" onclick= add(-1,${index})>-</button>
                <input type="text" class="shop-input" value="${value.amount}" disabled>
                <button class="shop-btn-add" onclick= add(1,${index})>+</button>
            </div>
        </div>
      </div>
    </div>
    `)
})
var shop_price = 0
function add(n,index){
  shop_data[index].amount = Math.max(0,shop_data[index].amount + n)
  $('.shop-input').eq(index).val(shop_data[index].amount)
  ccc()
  $('.shop-cart-data').each(function() {
    var elementId = $(this).attr('id');
    if(elementId == index) {
        $(this).addClass('active');
    }
});
}
// $('.shop-input').on('input',function(){
//   var shop_input_index = $(this).index('.shop-input')
//   var shop_input_val = $(this).val()
//   shop_data[shop_input_index].amount = shop_input_val
//   ccc()
// })
// $('.shop-input').on('blur',function(){
//   if($(this).val()===''){
//     $(this).val(0)
//     ccc()
//   }
// })
function ccc(){
  shop_price = 0
  $('.shop-cart-content').html('')
  $.each(shop_data,function(ind,item){
    if(item.amount != 0){
      shop_price += item.price * item.amount
      $('.shop-cart-content').prepend(`
      <div class="shop-cart-data" id="${ind}">
        <h5 class="color fw-bold">${item.title}</h5>
        <div class="df justify-content-between">
            <p>${item.amount}堂</p> 
            <p>NT$${item.price_text}/一天</p>
        </div>
      </div>
      `)
    }
  })
  $('.shop-total-price').text(shop_price)
}
$('.shop-submit').click(()=>{
  if($('.shop-total-price').text() != 0){
    $('#shop_submit').modal('show')
  }
})
$('.shop-submit-submit').click(()=>{
  $('.shop-cart-content').html('')
  $('.shop-total-price').text(0)
  $('.shop-submit-input').val('')
  shop_data.map(x => x.amount = 0)
  $('.shop-input').val(0)
})

// message
  var mes = new Swiper(".mes",{
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  grabCursor: true,
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  }
  })

var message_name = []
var message_email = []
var message_mess = []

function message(){
  window.event.preventDefault()
  message_name.push($('.message-name').val())
  message_email.push($('.message-email').val())
  message_mess.push($('.message-mess').val())
  localStorage.setItem('message-name',JSON.stringify(message_name))
  localStorage.setItem('message-email',JSON.stringify(message_email))
  localStorage.setItem('message-mess',JSON.stringify(message_mess))

  mes.appendSlide(`
  <div class="swiper-slide df jcc aic">
      <div class="mes-content">
          <h2 class="mb-2 fw-bold">${$('.message-name').val()}</h2>
          <p class="fs-6 mb-1 text-end fw-bold">${$('.message-email').val()}</p>
          <div class="message-wire"></div>
          <p class="fs-5 mes-text">${$('.message-mess').val()}
          </p>
      </div>
  </div>
  `)
  $('.message-box input').val('')
  var newIndex = mes.slides.length - 1;
  mes.slideTo(newIndex, 0);
  mes.autoplay.start()
  
}
$(window).on('load',()=>{
  const local_name = JSON.parse(localStorage.getItem('message-name'))
  const local_email = JSON.parse(localStorage.getItem('message-email'))
  const local_mess =JSON.parse(localStorage.getItem('message-mess'))
  $.each(local_name,function(index,value){
    mes.appendSlide(`
    <div class="swiper-slide df jcc aic">
        <div class="mes-content">
            <h2 class="mb-2 fw-bold">${value}</h2>
            <p class="fs-6 mb-1 text-end fw-bold">${local_email[index]}</p>
            <div class="message-wire"></div>
            <p class="fs-5 mes-text">${local_mess[index]}
            </p>
        </div>
    </div>
    `)
  })
  message_name.push(local_name)
  message_email.push(local_email)
  message_mess.push(local_mess)
})



// robot

$('.robot').click(()=>{
    $('.robot-content').toggleClass('active')
})
$('.robot-xx').click(()=>{
  $('.robot-content').removeClass('active')
})

$('.robot-submit').click(()=>{
  if($('.robot-input').val() != ''){
    $('.robot-body').append(`
    <p class="df justify-content-end p-0">
      <span class="robot-2">${$('.robot-input').val()}</span>
    </p>
    `)
    var ans = '您好，我是本網站的聊天機器人，很高興為您服務，請留下您的聯絡資訊，或是來電(02)-1234-5678由專人客服人員為您服務。'
    x = Object.keys(ANS).filter(k => $('.robot-input').val().includes(k)).at(-1)
    if(x){
      ans = ANS[x]
    }
    setTimeout(() => {
      $('.robot-body').append(`
    <span class="robot-1">${ans}</span>
    `)
      $('.robot-body').animate({scrollTop:$('.robot-body')[0].scrollHeight},'slow')
    }, 1000);
    $('.robot-input').val('')
  }
})

$('.robot-input').keypress((e)=>{
    if(e.key === 'Enter'){
      $('.robot-submit').click()
    }
})

$('.robot-a').click(function(){
  var text = $(this).text()
  $('.robot-input').val(text)
  $('.robot-submit').click()
})

