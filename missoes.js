document.addEventListener("DOMContentLoaded", function () {
    const missionList = document.getElementById("mission-list");
    const completeButton = document.getElementById("complete-button");

    // Função para criar uma nova missão
    function createMission(description) {
        const li = document.createElement("li");
        li.textContent = description;
        missionList.appendChild(li);
    }

    // Adiciona missões iniciais
    createMission("Concluir a missão 1");
    createMission("Concluir a missão 2");
    createMission("Concluir a missão 3");
    createMission("Concluir a missão 4");

    // Função para marcar uma missão como concluída
    completeButton.addEventListener("click", function () {
        const selectedMissions = missionList.querySelectorAll("li");
        for (const mission of selectedMissions) {
            if (mission.classList.contains("completed")) {
                mission.parentNode.removeChild(mission);
            }
        }
    });
});
