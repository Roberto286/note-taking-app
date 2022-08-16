const textArea = document.querySelector('textarea');
const submitBtn = document.querySelector('#submit-btn');
const takeNote = () => {
	return {
		date: new Date().toLocaleDateString(),
		hour: `${new Date().getHours()} : ${new Date().getMinutes()}`,
		text: textArea.value,
	};
};
const AppendNote = () => {
	const note = takeNote();
	if (note.text) {
		const tr = document.createElement('tr');
		document.querySelector('tbody').appendChild(tr);
		for (const prop in note) {
			const td = document.createElement('td');
			td.innerHTML = note[prop];
			tr.appendChild(td);
		}
	}
};
submitBtn.addEventListener('click', () => AppendNote());
