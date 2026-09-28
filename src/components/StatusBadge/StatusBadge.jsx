import styles from "./StatusBadge.module.css";

export default function StatusBadge({ status }) {

    function getStatusClass(status) {

        if (status === "Available") {
            return styles.available;
        }

        if (status === "Adopted") {
            return styles.adopted;
        }

        if (status === "Reserved") {
            return styles.reserved;
        }

        if (status === "In Foster Care") {
            return styles.fosterCare;
        }

        if (status === "Medical Hold" || status === "In Review") {
            return styles.onHold;
        }

        return "";
    }

    return (
        <span className={`${styles.status} ${getStatusClass(status)}`}>
            {status === "Medical Hold" || status === "In Review" ? "On Hold": status}
        </span>
    );
}