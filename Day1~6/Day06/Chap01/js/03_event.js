$(function () {
    // -사건형 타입(on:이벤트핸들러{콜백}) :
    $('#item1').on('click',function()
    {$('#item1').css('color','hotpink')})

    $('#item2').on('click',function()
    {$(this).css('color','hotpink')})

    $('#item3').on('mouseover',function(){
        $(this).css('color','hotpink')
    $(this).css('backgrount-color','cornflowerblue')
    })
    $('#item3').on('mouseout',function(){
        $(this).css('color','hotpink')
    $(this).css('backgrount-color','cornflowerblue')
    })
    $('#item4').on('mouseout',function(){
        $(this).css('color','hotpink')
    $(this).css('backgrount-color','cornflowerblue')
    })
    .on('mouseover',function(){
        $(this).css('color','hotpink')
    $(this).css('backgrount-color','cornflowerblue')
    })

    $('#item5')
    .on('mouseout',function(){
        $(this).css('color','hotpink')
    $(this).css('backgrount-color','cornflowerblue')
    })
    .on('mouseover',function(){
        $(this).css('color','hotpink')
    $(this).css('backgrount-color','cornflowerblue')
    })
    .on('dblclick',function(){
        $(this).css('color','hotpink')
    $(this).css('backgrount-color','cornflowerblue')
    })

    
  // 색변경 필요
  
})
