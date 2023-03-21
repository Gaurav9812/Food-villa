import { useState } from "react"

const Section =({title, description, isVisible, setVisible})=> {
   

    return (
        <div className="border border-black p-3 m-2">
            <h3 className="text-3xl font-bold">{title}</h3>
            { isVisible ? 
            <>
              <button className="cursor-pointer underline" onClick={(e)=> {
                setVisible(false);
                 }}>Hide</button>
                 <p>{description}</p>
                 </>
            :
            <button className="cursor-pointer underline mr-3" onClick={(e)=> {
                setVisible(true);
                 }}>Show</button>
             }
            
            
        </div>
    )
}

const Instamart =() => {

    // const [sectionConfig, setSectionConfig ] = useState({
    //     showAbout: true,
    //     showTeam: false,
    //     showCareer:false
    // });
    const [visibleSection, setVisibleSection] = useState("about");

    return (
        <div>
            <Section title ="About Instamart" isVisible = {visibleSection == "about"} setVisible = {(bool) => {
                    if(bool) {
                        setVisibleSection("about");
                      } else {
                        setVisibleSection("");
                      }
            }} description = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." />
            <Section title = "Career Instamart" isVisible = {visibleSection == "career"} setVisible = {(bool)=>{
                                 if(bool) {
                                    setVisibleSection("career");
                                  } else {
                                    setVisibleSection("");
                                  }

            }}
             description = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." />
            <Section title = "Team Instamart" isVisible = {visibleSection == "team"} setVisible = {(bool)=>{
                            if(bool) {
                              setVisibleSection("team");
                            } else {
                              setVisibleSection("");
                            }

            }} description = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." />


        </div>
    )
}

export default Instamart;