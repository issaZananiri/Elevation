const posts = [
    {name: "Issa",
    text: "Hi"
    },
    {
    name: "Chris",
    text: "Hi"
    }
]
const render = function(){
    $('#container').empty()
    for(let post of posts)
    {
        $('#container').append($(`<div class=wish>${post.name}: ${post.text}</div>`))
    }
}
render()

$('#run').on('click',function()
{
    let name = $('#name').val()
    let wish = $('#text').val()
    $('#name').val("")
    $('#text').val("")
    posts.push({name: name,text: wish})
    render()
})

$('#container').on('click','.wish',function()
{
    $(this).closest('.wish').remove()

})