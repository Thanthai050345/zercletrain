function getApi() {
    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    fetch(
            "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces",
            requestOptions
        )
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            let province = document.getElementById('province');
            let tbody = document.getElementById('table_element');


            result.forEach((element) => {
                let tr = document.createElement('tr');
                let th = document.createElement('th');
                let td01 = document.createElement('td');
                let td02 = document.createElement('td');
                let td03 = document.createElement('td');

                tr.setAttribute("class", "bg-white border-b dark:bg-gray-800 dark:border-gray-700");
                th.setAttribute("class", "px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap");
                td01.setAttribute("class", "px-6 py-4");
                td02.setAttribute("class", "px-6 py-4");
                td03.setAttribute("class", "px-6 py-4");

                th.innerHTML = element.province;
                td01.innerHTML = element.update_date;
                td02.innerHTML = element.total_case;
                td03.innerHTML = element.total_death;

                tr.appendChild(th);
                tr.appendChild(td01);
                tr.appendChild(td02);
                tr.appendChild(td03);

                tbody.appendChild(tr);
            })

        })
        .catch((error) => console.log("error", error));
}

getApi();