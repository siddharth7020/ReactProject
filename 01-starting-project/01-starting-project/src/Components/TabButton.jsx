export default function TabButton ({children,onSelet,isSelected}) {
    // console.log('tab content');
    return(
        <li><button className={isSelected ? 'active' :undefined} onClick={onSelet}>{children}</button></li>
    );
    
}