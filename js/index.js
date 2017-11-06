$(function(){
    var lis=$('#uls').children();
    // 遍历li 批量注册事件 （功能键除外） 
    $.each(lis,function(i,e){
        $(e).click(function(){
            if($(e).prop('className')=='equal'
            ||$(e).prop('className')=='minus'
            ||$(e).prop('className')=='sum'
            ||$(e).prop('className')=='times'
            ||$(e).prop('className')=='divisor'
            ||$(e).prop('className')=='ab'
            ||$(e).prop('className')=='ac'
            ||$(e).prop('className')=='dian'
            ||$(e).prop('className')=='per'){
                return false;
            }
            var data=$(this).html();
            var datas=$('#inp').html()
            datas+=data;
            if($(e).prop('className')=='divisor'){
                var cons=$('#con').html();
                cons+="/";
                $('#con').html(cons)
                $('#inp').html(datas)
                flag=true;
            }
            else if($(e).prop('className')=='times'){
                var cons=$('#con').html();
                cons+="*";
                $('#con').html(cons)
                $('#inp').html(datas)
                flag=true;
            }else{
                var cons=$('#con').html();
                cons+=data;
                $('#con').html(cons)
                $('#inp').html(datas)
            }
        })
    })
        var arr=[];
        // AC 按键
        $('.ac').click(function(){
            $('#inp').html('')
            $('#result').html('')
            $('#con').html('')
            flag=true;
        })
        //MC
        $('.ab').click(function(){
            $('#result').html(arr[0])
            flag=true;
        })
        // 等号
        $('.equal').click(function(){
            var ss=eval($('#con').html())
            $('#result').html(ss)
            arr=[];
            arr.push($('#result').html())
            console.log(arr[0])
        })
        // 减号
        var arr=[];
        $('.minus').click(function(){
            if(eval($('#con').html())==""||eval($('#con').html())==undefined){
                return false;
            }else{
                var ss=eval($('#con').html())
                console.log(ss)
                $('#result').html(ss)
                 var datas=$('#inp').html()
                     datas+="-";
                 var cons=$('#con').html();
                     cons+="-";
                 $('#con').html(ss+'-')            
                 $('#inp').html(datas)
                 arr=[];
                 arr.push($('#result').html())
                 flag=true;
            }

        })

        // 加号
        $('.sum').click(function(){
            if(eval($('#con').html())==""||eval($('#con').html())==undefined){
                return false;
            }else{
                var ss=eval($('#con').html())
                console.log(ss)
                $('#result').html(ss)
                 var datas=$('#inp').html()
                     datas+="+";
                 var cons=$('#con').html();
                     cons+="+";
                 $('#con').html(ss+'+')            
                 $('#inp').html(datas)
                 arr=[];
                 arr.push($('#result').html())
                 flag=true;
            }
 
        })

         // 乘号
        $('.times').click(function(){
            if(eval($('#con').html())==""||eval($('#con').html())==undefined){
                return false;
            }else{
                var ss=eval($('#con').html())
                console.log(ss)
                $('#result').html(ss)
                    var datas=$('#inp').html()
                        datas+="×";
                    $('#con').html(ss+'*')            
                    $('#inp').html(datas)
                    arr=[];
                    arr.push($('#result').html())
                    flag=true;
            }

        })
        // 除号
        $('.divisor').click(function(){
            if(eval($('#con').html())==""||eval($('#con').html())==undefined){
                return false;
            }else{
                var ss=eval($('#con').html())
                console.log(ss)
                $('#result').html(ss)
                    var datas=$('#inp').html()
                        datas+="÷";
                    $('#con').html(ss+'/')            
                    $('#inp').html(datas)
                    arr=[];
                    arr.push($('#result').html())
                    flag=true;     
            }
            var ss=eval($('#con').html())
            console.log(ss)
            $('#result').html(ss)
                var datas=$('#inp').html()
                    datas+="÷";
                $('#con').html(ss+'/')            
                $('#inp').html(datas)
                arr=[];
                arr.push($('#result').html())
                flag=true;
        })

        // 点
        var flag=true;
        $('.dian').click(function(){
            if(flag){
                var datas=$('#inp').html()
                datas+=".";
                var cons=$('#con').html();
                cons+=".";
                $('#con').html(cons)
                $('#inp').html(datas)
            }
            flag=false;
        })

})