// bullet color

	let bullet_container = document.querySelector(".change_color ");

	/// array for themes 

	let themes = ["light","dark", "blue"];

	let colors = ["#f2f2fc" ,"#2f2f2f" ,"#1e3799"];

	let classI = ['fas fa-sun','far fa-moon','fas fa-cloud-moon'];

	let long = colors.length;

	let gear =document.querySelector(".change_color i");
	let curren = 0;
	bullet_container.onclick = function(e){
		
		if(curren == (long - 1)){
			curren = 0 ;
		}else{

			curren++;
		}

		
		document.body.className = themes[curren];
		
		localStorage.setItem("class",themes[curren]);
		localStorage.setItem("classI",classI[curren]);
		
		document.querySelector(".change_color i").className= localStorage.getItem("classI");
		
	}
	document.body.setAttribute("class",localStorage.getItem("class"));
	document.querySelector(".change_color i").className= localStorage.getItem("classI");

/*====================================================*/
// toggle btn 

	let btn = document.querySelector(".nav .container .btn");
	let menu = document.querySelector(".menu");
	let close = document.querySelector(".menu .closespan");
	btn.onclick =()=>{
		menu.classList.add("block");
	};
	close.onclick =()=>{
		menu.classList.remove("block");
	};
	// add and remove class active 
	let ancher = document.querySelectorAll(".menu ul li a");
	ancher.forEach( a =>{

		a.onclick =(e)=>{

			
			ancher.forEach(l=>{
				l.classList.remove("active");
			});
		a.classList.add("active");
		menu.classList.remove("block");
		}
	});



/*====================================================*/	
// skill 

	let skill = document.querySelectorAll(".skills .skillsli li a");
	let cont = document.querySelectorAll(".skills .container");
	skill.forEach(s=>{

		s.onclick = (e) =>{

			e.preventDefault();
			skill.forEach(a =>{
				a.classList.remove("active" ,"shadow");
			});
			s.classList.add("active","shadow");

			const data = e.target.dataset.sort;

			cont.forEach(c =>{

				if(data==c.dataset.sort){
					c.style.display="block";
				}
				else{
					c.style.display="none";
				}
			});
		}
	});
	// skill 
	// auto fill skill
	let skillProgress =document.querySelector(".skills");
	let progress_span =document.querySelectorAll(".skills .container .box .progress span");
	let progress_container =document.querySelectorAll(".skills .container .box .progress");

	let progress_percentage = document.querySelectorAll(".progress_percentage");
window.onscroll = function(){


let skilloffsettop = skillProgress.offsetTop;

// Skill Outer height 
let skillOuterHeight = skillProgress.offsetHeight;

// window height 
let windowHeight =this.innerHeight;

// window Scroll Top
let windowScrollTop = this.pageYOffset;

if(windowScrollTop > ((skilloffsettop  - 300  +skillOuterHeight) - windowHeight )){
	
	progress_span.forEach(s =>{

	s.style.width = s.dataset.number;
	
	});
setInterval( () => { 
	for(var w = 0 ; w < progress_span.length ; w++){

	progress_span[w].dataset.width = Math.floor(  (
	(parseInt(getComputedStyle(progress_span[w]).getPropertyValue("width")) * 100 ) / 
	parseInt(getComputedStyle(progress_container[w]).getPropertyValue("width")) ) ) + "%";
	progress_percentage[w].innerHTML = progress_span[w].dataset.width;
}
},1);
}else{

progress_span.forEach(s =>{

	s.style.width = "0";
});

}


}

///////////////////////////////////
/*===================================================*/
// Start shuffle


	let box = document.querySelectorAll(".portfolio .container .box");

	let anchor = document.querySelectorAll(".portfolio .skillsli li a");

	anchor.forEach(a =>{
		a.onclick =function(e){
		e.preventDefault();
		anchor.forEach( l=>{
			l.classList.remove("active" ,"shadow");
		});



		e.target.classList.add("active","shadow");


		const filter = e.target.dataset.sort;

		

		
			box.forEach(b =>{


			if(filter == "all"){
				b.style.display='block';
				setTimeout(()=>{
						b.classList.remove("disable");

					},1000);
			}else{


				if(b.dataset.sort == e.target.dataset.sort ){
					b.style.display='block';
					setTimeout(()=>{
						b.classList.remove("disable");

					},1000);
					
					

				}else{
					b.classList.add("disable");
					setTimeout(()=>{
						b.style.display='none';

					},1000);
				}
			}
				
			});

		};	
	});
/*===================================================*/
// slider 

	let sliderElements = document.querySelectorAll(".testimonials .container .content .box");

	let current = 0 ;

	let right = document.querySelector(".testimonials .container  .arrows .right");
	let left = document.querySelector(".testimonials .container  .arrows .left");

	right.onclick = () =>{

		if(current == sliderElements.length - 1){
			current = 0;

		}
		else{
			current++;	}


	 check();

	}

	left.onclick = (e) =>{

		if(current == 0){
			e.preventDefault();

		}else{
			current--;	}

	 check();

	}

	function check(){
		sliderElements.forEach(li =>{

			li.classList.remove("active")
		});
		sliderElements[current].classList.add("active");


	}
setInterval(()=>{
	if(current == sliderElements.length - 1){
			current = 0;

		}
		else{
			current++;	}


	 check();
	},6000);
/*===================================================*/
// go up 
// arrow to Up 

	let arrowUp = document.createElement("div");

		arrowUp.className = "arrowUp  shadow";

	let i = document.createElement("i");

		i.className = "fas fa-arrow-circle-up";
	/*	
		i.className = "fas fa-chevron-up";*/

		arrowUp.appendChild(i);

		document.body.appendChild(arrowUp);

	window.addEventListener("scroll",()=>{


		


		if(window.pageYOffset > 100){

			arrowUp.classList.add("active");
		}
		else{
			arrowUp.classList.remove("active");
		}
	});


	arrowUp.onclick = function(){
		window.scrollTo({

			top:0
		}); 
	}









