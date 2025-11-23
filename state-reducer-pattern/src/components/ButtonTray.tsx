type ButtonTrayProps = {
    handleNext: () => void;
    handlePrev: () => void;
};
const ButtonTray = ({handleNext, handlePrev}: ButtonTrayProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'end', gap: '12px', margin: '48px'}}>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default ButtonTray;