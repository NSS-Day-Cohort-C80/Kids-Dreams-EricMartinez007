import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const celebrityTarget = clickEvent.target

        if (celebrityTarget.dataset.type === "celebrity"){

            const celebrityId = parseFloat(celebrityTarget.dataset.celebrityid)

            for (const celebrity of celebrities){
                if (celebrityId === celebrity.id) {
                    window.alert(`${celebrity.name} is a ${celebrity.sport} star`)
                }
                
            } 
            
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-celebrityid="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
