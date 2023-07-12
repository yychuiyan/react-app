// 创建该文件目的是防止别人滥用ReactElement，需要定义一个独一无二的值
// 判断是否支持Symbol
const supportSymbol = typeof Symbol === 'function' && Symbol.for;

// 如果支持创建一个独一无二的值，否则返回一个数字
export const REACT_EMEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
