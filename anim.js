(function(){var d=document.documentElement;d.classList.add('js');
if(!('IntersectionObserver'in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('rm');return}
document.addEventListener('DOMContentLoaded',function(){
var els=document.querySelectorAll('.sec h2,.prof>*,.card,.price tr,.note,.faq details,.access>*,.banner,.tz,.steps li,.cta h2,.cta p,.cta .row');
els.forEach(function(e){e.classList.add('rv');var p=e.parentNode,i=Array.prototype.indexOf.call(p.children,e);e.style.transitionDelay=Math.min(i,5)*0.12+'s'});
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -12% 0px'});
els.forEach(function(e){io.observe(e)});
});})();
