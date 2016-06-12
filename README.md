Cover-Video-Js
========

Cover behaviour for video element

##Constructor
~~~~
<div id='wrapper'>
    <video id='video' width='320' height='176'>
        <source src='http://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4'>
    </video>
</div>

coverVideo = new CoverVideo({
    el: document.getElementById('video'),
    wrapper: document.getElementById('wrapper'),
});
coverVideo.init();
~~~~

##Parameters

* el: Video element
* wrapper: Video element parent
