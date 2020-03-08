
// $(".field").hide().fadeIn(2000);
$(".monster").hide().fadeIn(4000);
$(".player").hide().fadeIn(4000);
var plife=3;
var elife=3;
let winnum=0;
let losenum=0;


//じゃんけん部分
//剣で攻撃//
$(".attack1").on("click",function(){
    $(".title").delay(500).queue(function(n){
        $(this).html("剣で攻撃！");
        n();
    }).delay(3000);

var cpu = Math.floor( Math.random() *3);
if(cpu==2){
    console.log("剣");
    $(".title").delay(500).queue(function(n){
        $(this).html("敵は剣で攻撃！");
        n();
    }).delay(3000).queue(function(n){
        $(this).html("引き分け！");
        n();
    })




}else if(cpu==1){
    console.log("盾");  
    $(".title").delay(500).queue(function(n){
        $(this).html("敵は盾で防御！");
        n();
    }).delay(3000).queue(function(n){
        $(this).html("あなたの負け！");
        n();
    }).delay(3000).queue(function(n){
        if(plife==3){
            $(".plife-point3").hide();
            n();
            plife=plife-1;
            }else if(plife==2){
            $(".plife-point2").hide();
            n();
            plife=plife-1;
            }else{
            $(".plife-point1").hide();
            n();
            plife=plife-1;
            $(this).html("敗北！");
            }
    });

}else{
    console.log("ハンマー");  
    $(".title").delay(500).queue(function(n){
        $(this).html("敵はハンマーで攻撃！");
        n();
    }).delay(3000).queue(function(n){
        $(this).html("あなたの勝ち！");
        n();
    }).delay(3000).queue(function(n){
        if(elife==3){
            $(".elife-point3").hide();
            n();
            elife=elife-1;
            }else if(elife==2){
            $(".elife-point2").hide();
            n();
            elife=elife-1;
            }else{
            $(".elife-point1").hide();
            n();
            elife=elife-1;
            $(this).html("勝利！");
            }
    });
}
});
//剣で攻撃終了//

//盾で防御//
$(".attack2").on("click",function(){
    $(".title").delay(500).queue(function(n){
        $(this).html("盾で防御！");
        n();
    }).delay(3000);
    
    var cpu = Math.floor( Math.random() *3);
    if(cpu==2){
        console.log("剣");  
    $(".title").delay(500).queue(function(n){
        $(this).html("敵は剣で攻撃！");
        n();
    }).delay(3000).queue(function(n){
        $(this).html("あなたの勝ち！");
        n();
    }).delay(3000).queue(function(n){
        if(elife==3){
            $(".elife-point3").hide();
            n();
            elife=elife-1;
            }else if(elife==2){
            $(".elife-point2").hide();
            n();
            elife=elife-1;
            }else{
            $(".elife-point1").hide();
            n();
            elife=elife-1;
            $(this).html("勝利！");
            }
    });
        
    
    }else if(cpu==1){
        console.log("盾");
        $(".title").delay(500).queue(function(n){
        $(this).html("敵は盾で防御！");
        n();
      　}).delay(3000).queue(function(n){
        $(this).html("引き分け！");
        n();
    })


    }else{
        console.log("ハンマー");  
    $(".title").delay(500).queue(function(n){
        $(this).html("敵はハンマーで攻撃！");
        n();
    }).delay(3000).queue(function(n){
        $(this).html("あなたの負け！");
        n();
    }).delay(3000).queue(function(n){
        if(plife==3){
            $(".plife-point3").hide();
            n();
            plife=plife-1;
            }else if(plife==2){
            $(".plife-point2").hide();
            n();
            plife=plife-1;
            }else{
            $(".plife-point1").hide();
            n();
            plife=plife-1;
            $(this).html("敗北！");
            }
    });
    }
    });
    //盾で防御終了//

    //ハンマーで攻撃//

    $(".attack3").on("click",function(){
        $(".title").delay(500).queue(function(n){
            $(this).html("ハンマーで攻撃！");
            n();
        }).delay(3000);
        
        var cpu = Math.floor( Math.random() *3);
        if(cpu==2){
            console.log("剣");  
    $(".title").delay(500).queue(function(n){
        $(this).html("敵は剣で攻撃！");
        n();
    }).delay(3000).queue(function(n){
        $(this).html("あなたの負け！");
        n();
    }).delay(3000).queue(function(n){
        if(plife==3){
            $(".plife-point3").hide();
            n();
            plife=plife-1;
            }else if(plife==2){
            $(".plife-point2").hide();
            n();
            plife=plife-1;
            }else{
            $(".plife-point1").hide();
            n();
            plife=plife-1;
            $(this).html("敗北！");
            }
    });
        
        }else if(cpu==1){
            console.log("盾");  
    $(".title").delay(500).queue(function(n){
        $(this).html("敵は盾で防御！");
        n();
    }).delay(3000).queue(function(n){
        $(this).html("あなたの勝ち！");
        n();
    }).delay(3000).queue(function(n){
        if(elife==3){
            $(".elife-point3").hide();
            n();
            elife=elife-1;
            }else if(elife==2){
            $(".elife-point2").hide();
            n();
            elife=elife-1;
            }else{
            $(".elife-point1").hide();
            n();
            elife=elife-1;
            $(this).html("勝利！");
            }
    });
        }else{
            console.log("ハンマー");
    $(".title").delay(500).queue(function(n){
        $(this).html("敵はハンマーで攻撃！");
        n();
    }).delay(3000).queue(function(n){
        $(this).html("引き分け！");
        n();
    })
        }
        });

// ここからデータ格納
//1.対戦終わったらセーブ
$("#save").on("click",function(){
    const key=$("#key").val();
    const value=$("#memo").val();
    console.log(key);
    console.log(value);
    localStorage.setItem(key,value);
    const html='<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list").append(html);
// 消しチュアダメ
});

//2.clear クリックイベント
$("#clear").on("click",function(){
    localStorage.clear();
    $("#list").empty();
// 消しチュアダメ
});

//3.ページ読み込み：保存データ取得表示
for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i);
    const value=localStorage.getItem(key);
    const html='<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list").append(html);

}





// クリックされたらなにかをやる