
    var text = document.querySelector('#text');
    var button = document.querySelector('#button');
    var divtasks = document.querySelector('#div-tasks');
    var titleH4 = document.querySelector('#titleh4')
    var cont = 1

        
    text.addEventListener('keypress', function (pressEnter) {
        if (pressEnter.key === 'Enter') {
            let textData = text.value;
            if (!textData.trim() || textData.length == 0)
            {
                text.innerText = '';
            }
            else
            {
                createTask()
                
            }

        }
    });

    button.addEventListener('click', function () {
        let textData = text.value;
        if (!textData.trim() || textData.length == 0)
        {
            text.innerText = '';
        }
        else
        {
            createTask()
        }
        
    });



    function addOrRemoveColor(taskCont)
    {
        var task = document.querySelector(`#${taskCont}`)
        existColor = task.classList.value
        if(existColor.includes('bg-primary'))
        {
            task.classList.remove('bg-primary')
        }
        else
        {
            task = task.classList.add('bg-primary')
        }

    }


    function createTask()
    {

        let textData = text.value;
        textData = textData.trim()
        divtasks.classList.remove('d-none')
        titleH4.classList.remove('d-none')

        let addAreaText = document.createElement("p")
        let addText = document.createTextNode(textData);
        addAreaText.appendChild(addText)
        divtasks.appendChild(addAreaText)

        addAreaText.classList.add('form-control', 'mb-1')
        addAreaText.setAttribute('id', 'task'+cont)
        addAreaText.setAttribute('onclick', `addOrRemoveColor(\"task${cont}"\)`)
        text.value = ''
        cont = cont + 1

    }