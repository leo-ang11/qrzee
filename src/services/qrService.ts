export const generateQR = ({
    type,
    value,
    setQrValue,
}: {
    type: string;
    value: string;
    setQrValue: (url: string) => void;
}) => {

    const endpoint = "https://api.qrserver.com/v1/create-qr-code"
    let trimmedValue = value.trim();

    if (type === "URL" || type === "url") {

        try {
            new URL(trimmedValue);
        } catch {
            alert("Please enter a valid URL!");
            return;
        }

    } else if (type === "Text" || type === "text") {

        if (!trimmedValue) {
            alert("Please enter some text!");
            return;
        }

        if (trimmedValue.length > 800) {
            alert("Text maximum is 800 characters");
            return;
        }
    }

    const qrData = `${endpoint}/?size=220x220&data=${encodeURIComponent(value)}`;
    setQrValue(qrData);
};
