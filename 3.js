const form = document.querySelector('form');
const allTask = document.querySelector('#allTask');
const input = document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text = input.value.trim();
    if(text == "")
    {
        return;
    }
    const parent = document.createElement('div');
    parent.style.marginTop = "20px";

    const task = document.createElement('span');
    task.textContent = text;

    task.style.marginRight = "20px";

    const dltbtn = document.createElement('button');
    dltbtn.textContent = 'Delete';
    dltbtn.style.width = "50px";

    const done = document.createElement('button');
    done.textContent = 'Done';
    done.style.width = "50px";
    done.style.marginRight = "10px";

    parent.append(task,dltbtn,done);
    allTask.append(parent);

    dltbtn.addEventListener('click',()=>{
        parent.remove();
    });
    done.addEventListener('click',()=>{
        task.style.textDecoration = 'line-through';
        task.style.color = 'grey';
    })

    form.reset();

})