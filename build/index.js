let show=document.querySelector('#hamburger');
var add_to_cart=document.querySelector('.add');
let close=document.querySelector('#close');
var quantity=document.querySelector('#quantity');
var plus=document.querySelector('#plus');
var minus=document.querySelector('#minus');
var Delete=document.querySelector('#delete');
let elements= document.querySelectorAll('.hide');
let empty= document.querySelector('.empty');
let next=document.querySelector('#next');
let previous=document.querySelector('#previous');
let current=document.querySelector('#current');
var images= document.querySelectorAll('.image');
let MakeVisible=(index)=>
{
images[index].style.setProperty('--before-display', 'none');
images[index].classList.remove('hide');

images[index].classList.add('show');
}
let MakeInvisible=(index)=>
{
   images[index].style.setProperty('--before-display', 'none');
   images[index].classList.remove('show');
   images[index].classList.add('hide'); 
}

show.addEventListener('click',()=>
{
   document.querySelector('.side_nav').style.display = 'block';
});
close.addEventListener('click',()=>
{
   document.querySelector('.side_nav').style.display ='none';
});

plus.addEventListener('click',()=>
{
   var num= parseInt(quantity.textContent)
   console.log(num.toString());
   num++;
   console.log(num.toString());
   quantity.textContent=num.toString();
});
minus.addEventListener('click',()=>
{
   var num= parseInt(quantity.textContent)
   console.log(num.toString());
   if(num!=0)
   {
   num--;    
   }
   console.log(num.toString());
   quantity.textContent=num.toString();
});
add_to_cart.addEventListener('click',()=>
{
  
   if(parseInt(quantity.textContent)!=0 )
   {
      document.querySelector('.before_sella').style.display='block';
   
     let quan=document.querySelector('#quan');
    let price=document.querySelector('#price');
    quan.textContent=quantity.textContent;
    document.querySelector('.before_sella').textContent=quantity.textContent;
    price.textContent=(parseInt(quantity.textContent)*125).toString(); 
    empty.style.display="none";
    elements[0].style.display='flex';
    elements[1].style.display='block';
   }
   else 
   {     
   empty.style.display='block';
   elements.forEach((item)=>
   {
      item.style.display='none';
   })
   }
    

});
var sella=document.querySelector('#sella');
sella.addEventListener('click',()=>
{
   let product=document.querySelector('.product');

   if(product.style.display=='none')
   {
      product.style.display="block";
      document.querySelector('.before_sella').style.display='none';

   }
   else product.style.display="none";
});
Delete.addEventListener('click',()=>
{
   quantity.textContent=0;   
   empty.style.display='block';
   elements.forEach((item)=>
   {
      item.style.display='none';
   })
})
next.addEventListener('click',()=>
{
   console.log();
   console.log(current.src);
   let str = current.src;
   str[49]="2";
   if(current.src[49]=="1")
   {
      current.src="images/image-product-2.jpg";
      images.forEach((item, index) =>
      {
         console.log(item);
         console.log(index);
         MakeInvisible(index)
      })
      MakeVisible(1);
      return 0;
   }
   if(current.src[49]=="2")
   {
      current.src="images/image-product-3.jpg";
      images.forEach((item, index) =>
      {
         MakeInvisible(index)
      })
      MakeVisible(2);
      return 0;

   }
   if(current.src[49]=="3")
   {
      current.src="images/image-product-4.jpg";
      images.forEach((item, index) =>
      {
         MakeInvisible(index)
      })
      MakeVisible(3);
      return 0;

   }
});
previous.addEventListener('click',()=>
{
   console.log();
   console.log(current.src);

   let str = current.src;
   str[49]="2";
  
   if(current.src[49]=="2")
   {
      current.src="images/image-product-1.jpg";
      console.log(images);
      images.forEach((item, index) =>
      {
         MakeInvisible(index)
      })
      MakeVisible(0);
      return 0;
   }
   if(current.src[49]=="3")
   {
      current.src="images/image-product-2.jpg";
      images.forEach((item, index) =>
      {
         MakeInvisible(index)
      })
      MakeVisible(1);
      return 0;
   }
   if(current.src[49]=="4")
   {
      current.src="images/image-product-3.jpg";
      images.forEach((item, index) =>
      {
         MakeInvisible(index)
      })
      MakeVisible(2);
      return 0;

   }
});
// (parseInt(current.src[49]+1)).toString();