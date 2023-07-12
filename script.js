const TabLinkOn = document.getElementsByClassName('tab_link_on')
const none = document.getElementsByName('NONE')
const Tab1 = document.getElementsByClassName('tab_link1')
const Tab2 = document.getElementsByClassName('tab_link2')
const Tab3 = document.getElementsByClassName('tab_link3')
const TL1 = document.getElementsByClassName('list_wrap_chart1')
const TL2 = document.getElementsByClassName('list_wrap_chart2')
const TL3 = document.getElementsByClassName('list_wrap_chart3')

Tab1.addEventListener('click', TAB1)
Tab2.addEventListener('click', TAB2)
Tab3.addEventListener('click', TAB3)

function TAB1() {
	Tab1.classList.add(TabLinkOn)
	Tab2.classList.remove(TabLinkOn)
	Tab3.classList.remove(TabLinkOn)
	TL1.classList.remove(none)
	TL2.classList.add(none)
	TL3.classList.add(none)
}
function TAB2() {
	Tab1.classList.remove(TabLinkOn)
	Tab2.classList.add(TabLinkOn)
	Tab3.classList.remove(TabLinkOn)
	TL1.classList.add(none)
	TL2.classList.remove(none)
	TL3.classList.add(none)
}
function TAB3() {
	Tab1.classList.remove(TabLinkOn)
	Tab2.classList.remove(TabLinkOn)
	Tab3.classList.add(TabLinkOn)
	TL1.classList.add(none)
	TL2.classList.add(none)
	TL3.classList.remove(none)
}
