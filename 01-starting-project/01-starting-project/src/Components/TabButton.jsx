export default function TabButton ({children,onSelet}) {
    // console.log('tab content');
    return(
        <li><button onClick={onSelet}>{children}</button></li>
    );
    
}