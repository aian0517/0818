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


// sun
var sun = 1
$('.sun').click(()=>{
   if(sun === 1){
    $('body').css('--bg--color','#f78614')
    $('body').css('--bg--color2','#2894FF')
    $('body').css('--bg--sun','#5d5d5d')
    $('body').css('--color--sun','#fff')
    $('.sun').attr('src','./image/nav-icon3-moon.png')
    $('.footer-runbg').css('background-image','url(../image/footer-bg2.png)')
    sun = 0
  }else if(sun === 0){
    $('body').css('--bg--color','#2894FF')
    $('body').css('--bg--color2','#f78614')
    $('body').css('--bg--sun','#fff')
    $('body').css('--color--sun','#000')
    $('.sun').attr('src','./image/nav-icon3.png')
    $('.footer-runbg').css('background-image','url(../image/footer-bg.png)')
    sun = 1
  }
})


// $('.color-btn').click(()=>{
//   var form_color = $('.form-color').val()
//   var form_color2 =$('.form-color2').val()
//   $('body').css('--bg--color',form_color)
//   $('body').css('--bg--color2',form_color2)
// })



// message
function message(){
  window.event.preventDefault()
  $('.message').append(`
  <div class="message-1 mb-2">
      <div class="df justify-content-between mb-2">
          <h5 class="mb-0">${$('.message-name').val()}</h5>
          <p class="fs-6 mb-0">${$('.message-email').val()}</p>
      </div>
      <p class="message-1-wire fs-4">
          ${$('.message-input').val()}
      </p>
  </div>
  `)
  $('.message-box input').val('')
}


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