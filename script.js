const fullNameEl = document.getElementById('full-name');
const changeNameBtn = document.getElementById('change-name-btn');
const currentDateEl = document.getElementById('current-date');
const yourEmailEl = document.getElementById('your-email');
const listBtn = document.getElementById('list-btn');
const listWrapperEl = document.getElementById('list-wrapper');

window.addEventListener('load', () => {
  currentDateEl.textContent = new Date().toDateString();
  yourEmailEl.textContent = 'myEmail@email.com';
});

changeNameBtn.addEventListener('click', () => {
  do {
    const input = window.prompt('Type Your Full Name');
    if (typeof input === 'string' && input.length > 0) {
      fullNameEl.textContent = input;
      break;
    }
  } while (true);
});

listBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const input = window.prompt(
    'Type how many items you would like in the list in number'
  );

  const parsed = parseInt(input);

  if (typeof parsed === 'number' && parsed > 0 && parsed <= 10) {
    listWrapperEl.innerHTML = new Array(parsed)
      .fill(0)
      .map((val, index) => getItemsHTML(index + 1))
      .join();
  }
});

function getItemsHTML(num) {
  return `
            <div class="d-flex mb-4">

							<!-- icon -->
							<div class="text-primary">
								<img width="40" height="20" src="demo.files/svg/various/line-chart.svg" alt="...">
							</div>

							<div class="mx-2">

								<!-- heading -->
								<h3 class="h5 fw-bold mb-1">
									Item #${num}
								</h3>

								<!-- text -->
								<p>
									This is item #${num}.
								</p>

							</div>

						</div>
  `;
}
