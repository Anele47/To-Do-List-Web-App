window.addEventListener("DOMContentLoaded", () => {

    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        window.location.href = "index.html";
        return;
    }

    const tasks = JSON.parse(
        localStorage.getItem("tasks_" + currentUser)
    ) || [];

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    const completionRate =
        totalTasks > 0
        ? ((completedTasks / totalTasks) * 100).toFixed(1)
        : 0;

    document.getElementById("totalTasks").textContent = totalTasks;
    document.getElementById("completedTasks").textContent = completedTasks;
    document.getElementById("completionRate").textContent = completionRate + "%";

    const importantTasks = tasks.filter(task => task.important).length;
    const normalTasks = totalTasks - importantTasks;

    const weeklyData = [0, 0, 0, 0, 0, 0, 0];

    tasks.forEach(task => {
    if (task.completed && task.completedDate) {
        const date = new Date(task.completedDate);

        if (!isNaN(date.getTime())) {
            const day = date.getDay();
            weeklyData[day]++;
        }
    }
});

    const monthlyData = [0,0,0,0,0,0,0,0,0,0,0,0];

    tasks.forEach(task => {
    if (task.completed && task.completedDate) {
        const date = new Date(task.completedDate);

        if (!isNaN(date.getTime())) {
            const month = date.getMonth();
            monthlyData[month]++;
        }
    }
});

    function calculateStreak(tasks) {
        const completedDates = tasks
            .filter(t => t.completed && t.completedDate)
            .map(t => new Date(t.completedDate).toDateString());

        const uniqueDays = [...new Set(completedDates)];

        let streak = 0;
        let currentDate = new Date();

        while (true) {
            if (uniqueDays.includes(currentDate.toDateString())) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }

        return streak;
    }

    const streak = calculateStreak(tasks);
    document.getElementById("streak").textContent = streak;

    const weeklyCanvas = document.getElementById("weeklyChart");

    if (weeklyCanvas) {
        new Chart(weeklyCanvas, {
            type: "bar",
            data: {
                labels: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
                datasets: [{
                    label: "Tasks Completed",
                    data: weeklyData,
                    backgroundColor: "#3935a2"
                }]
            }
        });
    }

    const monthlyCanvas = document.getElementById("monthlyChart");

    if (monthlyCanvas) {
        new Chart(monthlyCanvas, {
            type: "line",
            data: {
                labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                datasets: [{
                    label: "Tasks Completed",
                    data: monthlyData,
                    borderColor: "#615AD0",
                    backgroundColor: "#615AD0",
                    tension: 0.4
                }]
            }
        });
    }

    const priorityCanvas = document.getElementById("priorityChart");

    if (priorityCanvas) {
        new Chart(priorityCanvas, {
            type: "pie",
            data: {
                labels: ["Important", "Normal"],
                datasets: [{
                    data: [importantTasks, normalTasks],
                    backgroundColor:[
                "#615AD0",
                "#3a0ca3"
            ],    

                borderColor: "#1e1e1e",
                borderWidth: 2
                }]
            }
        });
    }

});