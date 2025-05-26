import React, { useState } from 'react';
import venIcon from '../public/venIcon.svg'; 

const HeadbandComponent = ({ menuOptions = [] }) => {
    const [borderStyle, setBorderStyle] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    // Function to handle mouse entering the div (hover start)
    const handleMouseEnter = () => {
        setBorderStyle('1px solid #F9A08F'); // Red border
    };

    // Function to handle mouse leaving the div (hover end)
    const handleMouseLeave = () => {
        setBorderStyle('1px solid #fff'); // No border
    };

    const handleHeadbandClick = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleSubMenuClick = () => {
        setSubMenuOpen((prev) => !prev);
    };

    const BoxIcon = ({bgColor}) => {
        return (
            <div
                style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '10%',
                    backgroundColor: bgColor || '#b8b8b8',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src={venIcon} width={24} height={24} alt="venemergencia icon" />
            </div>
        );
    }

    return (
        <div style={{ position: 'relative', fontFamily: 'Roboto, sans-serif', }}>
            <div
                className="headband"
                style={{
                    opacity: menuOptions.length > 0 ? 1 : 0.5,
                    border: borderStyle,
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    margin: 'auto',
                    cursor: 'pointer',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleHeadbandClick}
                title={menuOptions.length > 0 ? "Sistemas Operativos Venemergencia" : "No posee opciones disponibles" }
            >
                <img src="/iconImage.svg" width={28} height={28} alt="iconImage" />
            </div>
            {menuOpen && menuOptions.length > 0 && (
                <div
                    className="menuOpen"
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: 8,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        padding: 10,
                        zIndex: 1000,
                        minWidth: 160,
                    }}
                >
                    <ul
                        style={{
                            listStyle: 'none',
                            margin: 0,
                            padding: 0,
                            display: 'grid',
                            gap: 12,
                            minWidth: 160,
                        }}
                    >
                        {menuOptions.map((option, idx) => {
                            const group_name = option?.role?.group_name.split(' ');
                            const name = option?.system?.name.split(' ');

                            if (group_name && group_name?.length > 1) {
                                return (
                                    <li key={idx} style={{ whiteSpace: 'pre-wrap', position: 'relative' }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: 12,
                                                textDecoration: 'none',
                                                color: '#808382',
                                                cursor: 'pointer',
                                                fontFamily: 'Roboto, sans-serif',
                                            }}
                                            onClick={e => {
                                                e.stopPropagation();
                                                setSelectedOption(idx)
                                                handleSubMenuClick()
                                            }}
                                        >
                                            <BoxIcon bgColor={option?.system?.color ?? '#b8b8b8'} />
                                            <div
                                                className="menuText"
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    marginLeft: 8,
                                                    fontStyle: 'roboto',
                                                }}
                                            >
                                                {
                                                    name?.length > 1 ? (
                                                        <>
                                                            <p style={{ margin: 0 }}>
                                                                {name[0] ?? ''}
                                                            </p>
                                                            <p style={{ margin: 0 }}>
                                                                {name[1] ?? ''}
                                                            </p>
                                                        </>
                                                    ) : (
                                                        <p style={{ margin: 0 }}>
                                                            {option?.system?.name ?? ''}
                                                        </p>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        {selectedOption === idx && subMenuOpen && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: 36,
                                                    left: 0,
                                                    background: '#fff',
                                                    border: '1px solid #ccc',
                                                    borderRadius: 8,
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                                    padding: 8,
                                                    zIndex: 1100,
                                                    minWidth: 140,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 8,
                                                }}
                                            >
                                                {option?.role?.group_name
                                                    ?.split(' ')
                                                    .map((n, i) => (
                                                        <a
                                                            key={i}
                                                            href={option?.url?.url}
                                                            style={{
                                                                display: 'flex',
                                                                color: '#808382',
                                                                textDecoration: 'none',
                                                                padding: '4px 8px',
                                                                borderRadius: 4,
                                                                fontSize: 12,
                                                                transition: 'background 0.2s',
                                                            }}
                                                            onClick={e => e.stopPropagation()}
                                                        >
                                                            <div>
                                                                {`${n}`}
                                                            </div>
                                                            <div style={{ marginLeft: 7, marginTop: 2 }}>
                                                                <img src="/rightIcon.svg" width={11} height={11} alt="right icon" />
                                                            </div>
                                                        </a>
                                                    ))}
                                            </div>
                                        )}
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={idx} style={{ whiteSpace: 'pre-wrap' }}>
                                        <a
                                            href={option?.url?.url}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: 12,
                                                textDecoration: 'none',
                                                color: '#808382',
                                            }}
                                        >
                                            <BoxIcon bgColor={option?.system?.color ?? '#b8b8b8'} />
                                            <div
                                                className="menuText"
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    marginLeft: 8,
                                                    fontFamily: 'Roboto, sans-serif',
                                                }}
                                            >
                                                <p style={{ margin: 0 }}>
                                                    {option?.system?.name ?? ''}
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                );
                            }})}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default HeadbandComponent;
