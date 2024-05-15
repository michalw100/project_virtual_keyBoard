import React, { useEffect } from 'react'

const BtnChangeLanguage = ({ setLanguage }) => {
    useEffect(() => {
        setLanguage(lowercase);
    }, [])
    const emoji = [
        {
            id: 1,
            char: '😄'
        },
        {
            id: 2,
            char: '😃'
        },
        {
            id: 3,
            char: '🤣'
        },
        {
            id: 4,
            char: '😂'
        },
        {
            id: 5,
            char: '😁'
        },
        {
            id: 6,
            char: '😀'
        },
        {
            id: 7,
            char: '😎'
        },
        {
            id: 8,
            char: '😋'
        },
        {
            id: 9,
            char: '😊'
        },
        {
            id: 10,
            char: '😉'
        },
        {
            id: 11,
            char: '😜'
        },
        {
            id: 12,
            char: '🥰'
        },
        {
            id: 13,
            char: '🤩'
        },
        {
            id: 14,
            char: '😑'
        },
        {
            id: 15,
            char: '🥱'
        },
        {
            id: 16,
            char: '😴'
        },
        {
            id: 17,
            char: '🤗'
        },
        {
            id: 18,
            char: '😏'
        },
        {
            id: 19,
            char: '😖'
        },
        {
            id: 20,
            char: '😭'
        },
        {
            id: 21,
            char: '😰'
        },
        {
            id: 22,
            char: '🥶'
        },
        {
            id: 23,
            char: '🤮'
        },
        {
            id: 24,
            char: '🤪'
        },
        {
            id: 25,
            char: '😤'
        },
        {
            id: 26,
            char: '😡'
        },
        {
            id: 27,
            char: '🥳'
        },
        {
            id: 28,
            char: 'space'
        },
        {
            id: 29,
            char: 'enter'
        },
        {
            id: 30,
            char: 'delete'
        },
        {
            id: 31,
            char: ','
        },
        {
            id: 32,
            char: '.'
        },
        {
            id: 33,
            char: 'undo'
        }
    ];
    const hebrew = [
        {
            id: 1,
            char: 'א'
        },
        {
            id: 2,
            char: 'ב'
        },
        {
            id: 3,
            char: 'ג'
        },
        {
            id: 4,
            char: 'ד'
        },
        {
            id: 5,
            char: 'ה'
        },
        {
            id: 6,
            char: 'ו'
        },
        {
            id: 7,
            char: 'ז'
        },
        {
            id: 8,
            char: 'ח'
        },
        {
            id: 9,
            char: 'ט'
        },
        {
            id: 10,
            char: 'י'
        },
        {
            id: 11,
            char: 'כ'
        },
        {
            id: 12,
            char: 'ל'
        },
        {
            id: 13,
            char: 'מ'
        },
        {
            id: 14,
            char: 'נ'
        },
        {
            id: 15,
            char: 'ס'
        },
        {
            id: 16,
            char: 'ע'
        },
        {
            id: 17,
            char: 'פ'
        },
        {
            id: 18,
            char: 'צ'
        },
        {
            id: 19,
            char: 'ק'
        },
        {
            id: 20,
            char: 'ר'
        },
        {
            id: 21,
            char: 'ש'
        }, {
            id: 22,
            char: 'ת'
        },
        {
            id: 23,
            char: 'ך'
        },
        {
            id: 24,
            char: 'ם'
        },
        {
            id: 25,
            char: 'ן'
        },
        {
            id: 26,
            char: 'ף'
        },
        {
            id: 27,
            char: 'ץ'
        },
        {
            id: 28,
            char: 'space'
        },
        {
            id: 29,
            char: 'enter'
        },
        {
            id: 30,
            char: 'delete'
        },
        {
            id: 31,
            char: ','
        },
        {
            id: 32,
            char: '.'
        },
        {
            id: 33,
            char: 'undo'
        }
    ];
    const lowercase = [
        {
            id: 1,
            char: 'a'
        },
        {
            id: 2,
            char: 'b'
        },
        {
            id: 3,
            char: 'c'
        }, {
            id: 4,
            char: 'd'
        },
        {
            id: 5,
            char: 'e'
        },
        {
            id: 6,
            char: 'f'
        },
        {
            id: 7,
            char: 'g'
        },
        {
            id: 8,
            char: 'h'
        },
        {
            id: 9,
            char: 'i'
        },
        {
            id: 10,
            char: 'j'
        },
        {
            id: 11,
            char: 'k'
        },
        {
            id: 12,
            char: 'l'
        },
        {
            id: 13,
            char: 'm'
        },
        {
            id: 14,
            char: 'n'
        },
        {
            id: 15,
            char: 'o'
        },
        {
            id: 16,
            char: 'p'
        },
        {
            id: 17,
            char: 'q'
        },
        {
            id: 18,
            char: 'r'
        },
        {
            id: 19,
            char: 's'
        },
        {
            id: 20,
            char: 't'
        },
        {
            id: 21,
            char: 'u'
        },
        {
            id: 22,
            char: 'v'
        },
        {
            id: 23,
            char: 'w'
        },
        {
            id: 24,
            char: 'x'
        },
        {
            id: 25,
            char: 'y'
        },
        {
            id: 26,
            char: 'z'
        },
        {
            id: 27,
            char: 'space'
        },
        {
            id: 28,
            char: 'enter'
        },
        {
            id: 29,
            char: 'delete'
        },
        {
            id: 30,
            char: ','
        },
        {
            id: 31,
            char: '.'
        },
        {
            id: 32,
            char: '@'
        },
        {
            id: 33,
            char: 'undo'
        }
    ];
    const numbers = [
        {
            id: 1,
            char: '1'
        },
        {
            id: 2,
            char: '2'
        },
        {
            id: 3,
            char: '3'
        },
        {
            id: 4,
            char: '4'
        },
        {
            id: 5,
            char: '5'
        },
        {
            id: 6,
            char: '6'
        },
        {
            id: 7,
            char: '7'
        },
        {
            id: 8,
            char: '9'
        },
        {
            id: 9,
            char: '@'
        },
        {
            id: 10,
            char: 0
        },
        {
            id: 11,
            char: '!'
        },
        {
            id: 12,
            char: '#'
        },
        {
            id: 13,
            char: '$'
        },
        {
            id: 14,
            char: '%'
        },
        {
            id: 15,
            char: '^'
        },
        {
            id: 16,
            char: '&'
        },
        {
            id: 17,
            char: '*'
        },
        {
            id: 18,
            char: '('
        },
        {
            id: 19,
            char: ')'
        },
        {
            id: 20,
            char: '-'
        },
        {
            id: 21,
            char: '='
        },
        {
            id: 22,
            char: '+'
        },
        {
            id: 23,
            char: '?'
        },
        {
            id: 24,
            char: '/'
        },
        {
            id: 25,
            char: '<'
        },
        {
            id: 26,
            char: '>'
        },
        {
            id: 27,
            char: ':'
        },
        {
            id: 28,
            char: 'space'
        },
        {
            id: 29,
            char: 'enter'
        },
        {
            id: 30,
            char: 'delete'
        },
        {
            id: 31,
            char: ','
        },
        {
            id: 32,
            char: '.'
        },
        {
            id: 33,
            char: 'undo'
        }
    ];

    return (
        <>
            <div>
                <button className='lang' onClick={() => { setLanguage(emoji) }}>emoji</button>
                <button className='lang' onClick={() => { setLanguage(hebrew) }}>hebrew</button>
                <button className='lang' onClick={() => { setLanguage(lowercase) }}>lowercase</button>
                <button className='lang' onClick={() => { setLanguage(numbers) }}>numbers</button>
            </div>
        </>
    )
}

export default BtnChangeLanguage