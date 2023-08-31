const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
        <div class="color">
            <div class="overflow-x-auto">
            <table class="table">
                <!-- row 1 -->
                <tr">
                    <td>Key</td>
                    <td>Keycode</td>
                    <td>Code</td>
                </tr>
                <!-- row 2 -->
                <tr>
                    <td>${e.key === ' ' ? 'space' : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    </div>
    `;
});
