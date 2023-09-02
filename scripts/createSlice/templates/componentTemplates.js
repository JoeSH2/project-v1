const interfaceConst = 'interface'

module.exports = (componentName) => `
    import { FC, memo } from 'react';
    import { useTranslation } from 'react-i18next';
    import { classNames } from 'shared/lib/classNames/classNames';
    import style from './${componentName}.module.scss'
    
    ${interfaceConst} ${componentName} {
      className?: string
    }
    
    export const Block: FC<${componentName}Props> = memo((props: ${componentName}Props) => {
      const { className } = props;
      const { t } = useTranslation();
    
      return (
        <div className={classNames(style.block, {}, [className])}>
            <span />
        </div>
      );
    });
`