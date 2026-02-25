import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const childTarget = clickEvent.target

        if (childTarget.dataset.type === "child"){

            const childId = parseFloat(childTarget.dataset.childid)

            for (const child of children){
                if (childId === child.id) {
                    window.alert(`${child.name}'s wish is ${child.wish}`)
                }
                
            } 
            
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-childid="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

