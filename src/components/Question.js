import React, { useEffect, useState } from 'react'

export default function Question({ selected, updateSelected, review }) {
    const [active, setaAtive] = useState();

    useEffect(() => {
        const obj = selected.options.find(item => item.checked);
        if (obj) {
            setaAtive(obj.value)
        }
        

    }, [selected])
    const bgColor =selected.backgroundColor;

    const handleRadio = (e, idx) => {
        setaAtive(e.target.value);
        updateSelected(idx)
       
    }

    return (
        <div className='Question my-5' style={{backgroundColor:bgColor}}>
            {selected &&
                <div>
                    <h4>Q. {selected["title"]}</h4>
                    <form>
                        {selected.options.map((item, idx) => (
                            <div class="form-radio">
                                <input type="radio" className="form-radio-input" name="" value={item.value} checked={active === item.value} onChange={(e) => handleRadio(e, idx)} disabled={review} />
                                <label class="form-radio-label" >{item.value}</label>
                            </div>
                        ))}

                    </form>
                    {review && <h1>
                        Answer: {selected["answer"]}
                        </h1>}
                </div>
            }
            
        </div>
    )
}