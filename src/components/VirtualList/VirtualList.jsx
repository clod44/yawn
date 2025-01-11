import { forwardRef, memo, useMemo } from "react";
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

const InnerElement = forwardRef(({ style, paddingSize, ...rest }, ref) => (
    <div
        ref={ref}
        style={{
            ...style,
            height: `${parseFloat(style.height) + paddingSize * 2}px`,
        }}
        {...rest}
    />
));

const VirtualList = ({
    data,
    renderItem,
    itemSize = 100,
    paddingSize = 0,
    className = "",
}) => {
    const MemoizedItem = useMemo(() => memo(({ index, style }) => {
        const adjustedStyle = useMemo(() => ({
            ...style,
            top: `${parseFloat(style.top) + paddingSize}px`,
        }), [style, paddingSize]);

        return renderItem({ index, style: adjustedStyle });
    }), [renderItem, paddingSize]);

    return (
        <AutoSizer>
            {({ height, width }) => (
                <List
                    height={height}
                    itemCount={data.length}
                    itemSize={itemSize}
                    width={width}
                    innerElementType={forwardRef((props, ref) => (
                        <InnerElement {...props} ref={ref} paddingSize={paddingSize} />
                    ))}
                    className={className}
                >
                    {({ index, style }) => (
                        <MemoizedItem index={index} style={style} />
                    )}
                </List>
            )}
        </AutoSizer>
    );
};

export default memo(VirtualList);
