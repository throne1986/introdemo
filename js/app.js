$(function () {
    var introguide = introJs();
    document.querySelector('ul.aside__list li').addEventListener('click', doStuff);

        function doStuff(){
            alert('hehe');
            introguide.setOptions({
                steps: [{
                    element: '#main',
                    intro: 'Welcome to create movie page , Let me guide you through its features.',
                    position: 'right'
        
                },
                {
                    element: '.main',
                    intro: 'Please select theme you would like to use for your videos',
                    position: 'right'
                }
                ]
            });
        }
    
      introguide.start();
});