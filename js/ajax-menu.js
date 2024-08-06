$(function(){
    $('.local-nav a').click(function(event){
        event.preventDefault();
    })

    let localNav = $('.local-nav li');

    localNav.click(function(){
        localNav.removeClass('active');
        $(this).addClass('active');
        let jsonName = $(this).attr('data-role');
        $.ajax({
            url:`./json/${jsonName}.json`,
            dataType:'json',
            success:function(obj){
                $('#data01').html(obj.data01);
                $('#data02').html(obj.data02);
                $('#data03').html(obj.data03);
                $('#data04').html(obj.data04);
                $('#data05').html(obj.data05);
                $('#data06').html(obj.data06);
                $('#data07').attr('src',obj.data07).attr('art',obj.data07_1);
                $('#data08').html(obj.data08);
                $('#td01').html(obj.td01);
                $('#td02').html(obj.td02);
                $('#td03').html(obj.td03);
                $('#td04').html(obj.td04);
                $('#td05').html(obj.td05);
                $('#td06').html(obj.td06);
                $('#td07').html(obj.td07);
                $('#td08').html(obj.td08);
                $('#td09').html(obj.td09);
                $('#td10').html(obj.td10);
                $('#td11').html(obj.td11);
                $('#td12').html(obj.td12);
                $('#menu01').attr('src',obj.menu01).attr('art',obj.menu01_1);
                $('#menu01-tit').html(obj.menu01_tit);
                $('#menu02').attr('src',obj.menu02).attr('art',obj.menu01_1);
                $('#menu02-tit').html(obj.menu02_tit);
                $('#menu03').attr('src',obj.menu03).attr('art',obj.menu01_1);
                $('#menu03-tit').html(obj.menu03_tit);
                $('#menu04').attr('src',obj.menu04).attr('art',obj.menu01_1);
                $('#menu04-tit').html(obj.menu04_tit);
                $('#menu05').attr('src',obj.menu05).attr('art',obj.menu01_1);
                $('#menu05-tit').html(obj.menu05_tit);
                $('#menu06').attr('src',obj.menu06).attr('art',obj.menu01_1);
                $('#menu06-tit').html(obj.menu06_tit);
                $('#menu07').attr('src',obj.menu07).attr('art',obj.menu01_1);
                $('#menu07-tit').html(obj.menu07_tit);
            },
            error:function(){
                alert('Error');
                location.reload();
            }
        })
        
    })

})