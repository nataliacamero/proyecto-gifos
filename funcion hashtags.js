

<script>

function addthis() {
   
    let b = a.value.replace('#',''); 
    a.value = '#'+b

    if (a.value.indexOf(' '))
    {
    a.value = a.value.replace(' ','#');
    }

}

addthis();
</script>