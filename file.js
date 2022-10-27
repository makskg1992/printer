const images={
books:[
    "	11.zip  					",
    "	395.zip  					",
    "	805 новая.zip   					",
    "	adjustment program epson xp 600 605 700 750 800 850.zip 					",
    "	AJPHELP_DEV.zip 					",
    "	AP Epson L1300.rar  					",
    "	Epson L810 L850 Resetter - Nosware.com.zip  					",
    "	Epson PX1004.zip   					",
    "	Epson Stylus Photo 1410.zip  					",
    "	Epson Stylus Photo 1430.zip  					",
    "	Epson T50.rar   					",
    "	Epson XP30 Adjustment program (1).zip   					",
    "	Epson XP30 Adjustment program.zip   					",
    "	Epson-p50-adjustment-www.spsystems.lv.zip   					",
    "	L 110. 210.300.350.355 (1).zip  					",
    "	L 110. 210.300.350.355 (2).zip  					",
    "	L 110. 210.300.350.355 (3).zip  					",
    "	L 110. 210.300.350.355 (4).zip  					",
    "	L 110. 210.300.350.355.zip  					",
    "	L-100.zip   					",
    "	L120.zip   					",
    "	L-120.zip   					",
    "	L130 L220 L222 L356 (1).zip  					",
    "	L130 L220 L222 L356 (2).zip  					",
    "	L130 L220 L222 L356 (3).zip  					",
    "	L-200.zip   					",
    "	L380.zip   					",
    "	L396.zip   					",
    "	L550.zip   					",
    "	L565.zip   					",
    "	L800 V.1.0.1Cracked(EPSON L800 Services Adjustment Program (Copy + Paste)).zip  					",
    "	L-800.zip   					",
    "	L-1300.zip  					",
    "	L-1800 . 810.zip   					",
    "	L1800 NEW.zip   					",
    "	L3110 L1100.zip  					",
    "	L6160 L6170 L6190.zip   					",
    "	M200.zip   					",
    "	px 660.zip  					",
    "	PX105 (1).zip   					",
    "	PX105.zip   					",
    "	PX204 (1).zip   					",
    "	PX204.zip   					",
    "	PX435.zip   					",
    "	WF2528 WF2538 WF2548 (1).zip   					",
    "	WF2528 WF2538 WF2548.zip   					",
    "	WF3520.zip  					",
    "	WF7015 WF7515 WF7525.zip   					",
    "	WF7110 WF7610 WF7620.zip   					",
    "	xp225 xp323.zip  					",
    "	XP235 332 335 432 435.zip   					",
    "	xp-413.zip  					",
    "	xp-415.zip  					",
    "	xp-605.zip  					",
    "	XP-800.zip  					",
    

]
};
const ressult = document.querySelector('.ressult');

// for(let key in images.name){
//     let fille = document.createElement(a);
//     fille.setAttribute('data-key', key);
//     fille.href= 'file/' + key  ;
//     fille.innerHTML= key;
//     ressult.append(fille);
// }








// ressult.innerHTML = "";


images.books.forEach((book, i) => {
    ressult.innerHTML += `
        <li class="book__item">
        <a href="file/${book}" download>${book}</a> 
        
        </li>
    `;
});