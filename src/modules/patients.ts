import axios from "axios";
export default {
	namespaced: true,
	state: {
		patient: "",
		error: "",
	},
	mutations: {
		CURRENT_PATIENT(state: any, patient: any) {
			state.patient = patient;
		},
		SET_ERROR(state: any, error: any) {
			state.error = error;
			state.patient = "";
		},
	},
	actions: {
		async getPatient({ commit }: { commit: any }, dni: string) {
			const url: string = `api/patients/${dni}`;
			const token = localStorage.getItem("token");
			try {
				const response = await axios
					.create({
						headers: {
							"Content-Type": "aplication/json",
							Authorization: `Bearer ${token}`,
						},
					})
					.get(url);
				commit("CURRENT_PATIENT", response.data);
			} catch (error) {
				console.log(error.message);

				commit("SET_ERROR", error.message);
			}
		},
	},
};
