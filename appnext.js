        (function(){
            var Appnext = {
              android_id: '027b7961-b74c-4f62-9a05-be0661cb6dee',
              ios_id: 'bd0512cd-1070-4c29-90a2-46d6993f6ecb',
              cat: '',
              pbk: '',
              cnt:'3',
              mute: '',
              creative:'managed',
              subid:'',
              display_mode:'min',
              video_length:'',
              parent_url:window.location.origin.toString()
            };
            var block = document.querySelector('#appnextiframe')
            var iframe = document.createElement('iframe');
            iframe.style.width='100%';
            iframe.style.border=0;
            var src = 'https://appnext.hs.llnwd.net/tools/tags/widget/index.html?v=2';
            for (var param in Appnext) src+='&'+param+'='+Appnext[param];
            iframe.src=src;
            block.appendChild(iframe);
            window.addEventListener("message", function(event){
                var origin = event.origin || event.originalEvent.origin;
                if (origin!=="https://appnext.hs.llnwd.net")return;
                iframe.style.height=event.data+'px';
                if(event.data=='noAds')block.removeChild(iframe);
            }, false);
        })();
