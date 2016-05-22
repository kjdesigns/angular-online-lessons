(function(){
    var app = angular.module("store",[]); 
    
    app.controller("StoreController",function(){
        this.products = gems;
        
    });
    
    app.controller("PanelController",function(){
       this.tab=1;
       
    });
    
    var gems=[
        
            {
        
                name:"Dodecahedron",
                price: 2.95,
                description: ". . .",
                canPurchase:true,
                //soldOut:true
            },
            
            {
        
                name:"Pentagonal Gem",
                price: 5.95,
                description: ". . .",
                canPurchase:false,
               // soldOut:false,
               images:[
                        {
                            full:"http://phaser.io/images/img.png",
                            thumb:"dodecahedron-01-thumb.jpg"
                        }
                    
                   ]
               
            }
            
        
        
        
        
        ];
    
    
    
})();


