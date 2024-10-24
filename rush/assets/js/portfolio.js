const data = {
    "pat": {
        "title": "Pat's Site",

    },
    "tae": {
        "title": "Tae's Site",
    }
}

function applyData() {
    const url = window.location.href;
    const id = url.split('#')[1];
    const port = data[id];

    if (!port) {
        showErrorModal({
            title: "An error has occured!",
            subtitle: "Portfolio not found!",
            description: "Please try again later."
        });

        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
        return;
    }

    try {
        document.title = port.title;
        document.getElementById('title').innerHTML = port.title;

        showContent();
        hideLoadingModal();
    } catch (e) {
        showErrorModal({
            title: "An error has occured!",
            subtitle: "Portfolio not found!",
            description: "Please try again later."
        });

        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    }

}
applyData();