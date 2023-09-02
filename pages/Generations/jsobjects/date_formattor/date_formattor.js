export default {
	formatDate(utcDateString) {
		const originalDate = new Date(utcDateString);
		return originalDate.toLocaleString()
	}
}